import * as github from '@actions/github'

import type {GithubLabel, GithubReviewer} from '../types'

export type ContextPullRequestDetails = {
  labels: string[]
  reviewers: string[]
  baseSha: string
}

/**
 * The pull request details from the context.
 *
 * @returns {ContextPullRequestDetails | null}
 * The pull request details that the application
 * requires.
 */
export async function getContextPullRequestDetails(
  client: ReturnType<typeof github.getOctokit>
): Promise<ContextPullRequestDetails | null> {
  const pullRequest = github.context.payload.pull_request

  if (typeof pullRequest === 'undefined') {
    return null
  }

  const labels = pullRequest.labels as GithubLabel[]
  const reviewers = pullRequest.requested_reviewers as GithubReviewer[]

  // const get reviews submitted by reviewers
  const currentReviews = await client.rest.pulls.listReviews({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    pull_number: pullRequest.number
  })

  const uniqueReviewers = new Set([
    ...reviewers.map(reviewer => reviewer.login),
    ...currentReviews.data.map(review => review.user?.login)
  ])

  return {
    labels: labels.map(label => label.name),
    reviewers: [...uniqueReviewers].filter(Boolean) as string[],
    baseSha: pullRequest?.base?.sha
  }
}
