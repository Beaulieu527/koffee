class OrderController < ApplicationController
    def index
        @orders = Orders.all
        respond_to do |f|
            f.json  { render :json => @orders }
        end
    end

    def new
        @order = Order.new
    end
    
    def create
        @order = current_user.orders.create(order_params)
        respond_to do |f|
            f.json  { render :json => @order }
        end
    end

    def show
        @order = Order.find_by(id: params[:id])
        if !@order
            render :json => {error: "Order not found"}
        end 
        
        respond_to do |f|
            f.json  { render :json => @order, include: "**" }
        end
    end

    def update
        @order = Order.find(params[:id])
        if @order && @order.user == current_user
            @order.update(order_params)
            render json: @order
        end
    end

    def destroy
        @order = Order.find(params[:id])
        if @order && @order.user == current_user
            @order.destroy
        end
    end

    private

    def order_params
        params.require(:order).permit(:amount, :product_id, )
    end
 
end



## f is variable for format
