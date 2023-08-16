class UsersController < ApplicationController
  def index
    users = User.order("first_name DESC")
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content, status: :ok
  end

  private
    def user_params 
      params.require(:user).permit(:first_name, :last_name)
    end
end
