export const fetchAllBenches = () => (
  $.ajax({
    url: '/api/benches',
  })
)