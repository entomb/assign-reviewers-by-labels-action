//import type {WebhookPayload} from '@actions/github/lib/interfaces'
//port type {Config} from '../config'
import type {
  AssignReviewersReturn
  //Client
} from '../types'
//port type {ContextPullRequestDetails} from './getContextPullRequestDetails'
//port {setReviewersAsync} from './setReviewersAsync'

// interface Options {
//   /**
//    * The client to perform actions on github.
//    */
//   client: Client
//   /**
//    * The labels and the reviewers that belong to
//    * each label.
//    */
//   labelReviewers: Config['assign']
//   /**
//    * The pull request details required.
//    */
//   contextDetails: ContextPullRequestDetails
//   /**
//    * The webhook payload.
//    */
//   contextPayload: WebhookPayload
// }

/**
 * Determine the reviewers that should be removed
 * depending on the state of the PR. Then, request
 * to remove those reviewers from the PR.
 *
 * @param {Options} options
 * @returns {Promise<AssignReviewersReturn}
 * The status of whether the reviewers were unassigned
 * as well as data containing those reviewers.
 */
export async function unassignReviewersAsync(): Promise<AssignReviewersReturn> {
  //   {
  //   client,
  //   labelReviewers,
  //   contextDetails,
  //   contextPayload
  // }: Options
  return {
    status: 'info',
    message: 'unassignReviewersAsync is disabled'
  }

  // if (contextDetails == null) {
  //   return {
  //     status: 'error',
  //     message: 'No action context'
  //   }
  // }

  // const labels = Object.keys(labelReviewers)

  // const reviewersByLabelInclude: string[] = []
  // const reviewersByLabelMiss: string[] = []

  // for (const label of labels) {
  //   if (!contextDetails.labels.includes(label)) {
  //     reviewersByLabelMiss.push(...labelReviewers[label])
  //   } else {
  //     reviewersByLabelInclude.push(...labelReviewers[label])
  //   }
  // }

  // if (reviewersByLabelMiss.length === 0) {
  //   return {
  //     status: 'info',
  //     message: 'No reviewers to unassign'
  //   }
  // }

  // let reviewersToUnassign: string[] = []

  // if (contextDetails.labels.length === 0) {
  //   reviewersToUnassign = [
  //     ...new Set([...reviewersByLabelMiss, ...reviewersByLabelInclude])
  //   ]
  // } else {
  //   reviewersToUnassign = reviewersByLabelMiss.filter(
  //     reviewer => !reviewersByLabelInclude.includes(reviewer)
  //   )
  // }

  // if (reviewersToUnassign.length === 0) {
  //   return {
  //     status: 'info',
  //     message: 'No reviewers to unassign'
  //   }
  // }

  // const result = await setReviewersAsync({
  //   client,
  //   reviewers: reviewersToUnassign,
  //   contextPayload,
  //   action: 'unassign'
  // })

  // if (result == null) {
  //   return {
  //     status: 'info',
  //     message: 'No reviewers to unassign'
  //   }
  // }

  // return {
  //   status: 'success',
  //   message: 'Reviewers have been unassigned',
  //   data: {url: result.url, reviewers: reviewersToUnassign}
  // }
}
