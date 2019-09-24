class ProductsController < ApplicationController
    def show
        @product = Product.find_by(id: params[:id])
        if !@product
            render :json => {error: "product not found"}
        end 

        respond_to do |f|
            f.json  { render :json => @product }
        end
    end

    def index
        @products = Product.all

        respond_to do |f|
            f.json  { render :json => @products }
        end
    end
end
