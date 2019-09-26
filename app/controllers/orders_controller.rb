class OrdersController < ApplicationController
    # before_action :authenticate_with_token!

    def index
        user = current_user
        @orders = Order.all
        respond_to do |f|
            f.json  { render :json => @orders }
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

    def new
        @order = Order.new
    end
    
    def create
        
        order = Order.create(user_id: 1)
        total = 0
     
        [:products].each do |product|
            product1 = Product.find_by(id: :product_id)
            order_line = OrderLine.create(order_id: order.id, product_id: :product_id, quantity: :quantity)
            total += product1.price * :quantity
        end

        order.amount = total
        order.save
        render :json => order

        # order = Order.create(user_id:1)
        # order.build_lines(params[:order][:product_ids_and_quantities])
        

        # if order.save
        #     order.reload
        #     respond_to do |f|
        #         f.json  { render :json => @order }
        #     end
        # else
        #   render json: { errors: order.errors }, status: 422
        # end
    
    end

   

    # def update
    #     @order = Order.find(params[:id])
    #     if @order && @order.user == current_user
    #         @order.update(order_params)
    #         render json: @order
    #     end
    # end

    # def destroy
    #     @order = Order.find(params[:id])
    #     if @order && @order.user == current_user
    #         @order.destroy
    #     end
    # end

end



## f is variable for format
