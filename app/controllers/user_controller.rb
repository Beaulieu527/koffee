class UserController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        if !@user
            render :json => {error: "User not found"}
        end 
        
        respond_to do |format|
            format.json  { render :json => @user, include: "**" }
        end
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.user == current_user
            @user.update(User_params)
            render json: @user
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user && @user.user == current_user
            @user.destroy
        end
    end

    private

    def User_params
        params.require(:user).permit(:name, :address, :phone_number)
    end

end
