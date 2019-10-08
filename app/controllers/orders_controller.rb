
class OrdersController < ApplicationController
  before_action :authenticate_user!
  
  def index
   
    @orders = Order.where(user_id: current_user.id)
    respond_to do |f|
      f.json { render json: @orders }
    end
  end

  def show
    @order = Order.find_by(user_id: current_user.id)
    render json: { error: 'Order not found' } unless @order

    respond_to do |f|
      f.json { render json: @order, include: '**' }
    end
  end

  def new
    @order = Order.new
  end

  def create
    order = Order.create(user_id: current_user.id)
    total=0
    
    params[:products].each do |product|
        product1 = Product.find_by(id: product["id"])
        order_line = OrderLine.create(product_id: product["id"], quantity: product["quantity"], order_id: order.id)
        total += product1.price * product["quantity"]
    end
       order.amount = total
    order.save
    render json: order
end


  private
  def order_params
    params.permit(:total, :products => [])
  end

end
