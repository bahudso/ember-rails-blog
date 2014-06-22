class Api::PostsController < ApplicationController
	respond_to :json

	def index
		respond_with Post.all
	end

	def show
		respond_with Post.find(params[:id])
	end

	def create
		@post = Post.new(params[:client])
		@post.title = params[:post][:title]
		@post.body = params[:post][:body]
	    if @post.save
	      respond_with @post
	    end
	end

	def destroy
		@post = Post.find(params[:id])
		if @post.present?
			@post.destroy
		end
		respond_with nil
	end

	def update
		post = Post.find(params[:id])
		post.title = params[:post][:title]
		post.body = params[:post][:body]
		if post.save
			respond_with post
		end
	end
end
