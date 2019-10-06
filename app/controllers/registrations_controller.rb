class RegistrationsController < Devise::SessionsController
  respond_to :json
  def create
 
    user = User.create(sign_up_params)
    render json: user
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :address, :phone_number,:token)
  end

end