class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render "api/benches/index"
  end

  def create
    
  end

  def benches_params 
    params.require(:bench).permit(:description, :seating, :lat, :lng)
  end 
end
