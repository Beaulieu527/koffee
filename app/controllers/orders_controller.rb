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
        # @order = current_user.orders.create(amount: 0)
        # # products = []
        # orderlines = []

        # total = 0
        # {id, name, quantity}
        # params[:products].each do |product|
        #     product1 = Product.find_or_create_by(id: product[:id])
        #     orderline = OrderLine.create(product_id: product1.id, order_id: order.id, quantity: product[:quantity])
        #     total += product1.price
        #     order_lines.push(product1)
        # end 

        # order.amount = total 
        # order.save
        order = current_user.orders.build
        order.build_placements_with_product_ids_and_quantities(params[:order][:product_ids_and_quantities])
        
        
        # params[:product_ids].each do |product|
        #     amount += product.price
        # end 
    
        if order.save
            order.reload
            respond_to do |f|
                f.json  { render :json => @order }
            end
        else
          render json: { errors: order.errors }, status: 422
        end
    
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

    private

    def order_params
        params.require(:order).permit(:product_ids => [])
    end
 
end



## f is variable for format
