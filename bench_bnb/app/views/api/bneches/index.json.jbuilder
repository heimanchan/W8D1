@benches.each do |bench|
  json.set! bench.id do 
    json.extract! bench, :description, :seating, :lat, :lng
    json.image_url asset_path(bench.picture_url)
  end
end