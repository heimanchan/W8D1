import * as BenchAPI from '../util/bench_api_util'

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";

const receiveAllBenches = benches => ({
  type: RECEIVE_ALL_BENCHES,
  benches
})

export const fetchAllBenches = () => dispatch => (
  BenchAPI.fetchAllBenches().then(res => dispatch(receiveAllBenches(res)))
)