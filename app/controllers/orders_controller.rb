class OrdersController < ApplicationController


    def index
        @orders = current_user.orders
        respond_to do |f|
            f.json  { render :json => @orders }
        end
    end

    def new
        @order = Order.new
    end
    
    def create
        @order = current_user.orders.create(amount: 0)
        # products = []
        orderlines = []

        total = 0
        {id, name, quantity}
        params[:products].each do |product|
            product1 = Product.find_or_create_by(id: product[:id])
            orderline = OrderLine.create(product_id: product1.id, order_id: order.id, quantity: product[:quantity])
            total += product1.price
            order_lines.push(product1)
        end 

        order.amount = total 
        order.save

        respond_to do |f|
            f.json  { render :json => @order }
        end

    end

    def show
        @order = current_user.orders.find_by(id: params[:id])
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
        params[:order][:products] ||= []
        params.require(:order).permit(:amount)
    end
 
end



## f is variable for format
