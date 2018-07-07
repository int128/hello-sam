STACK_NAME=hello-sam
BUCKET_NAME=int128-hello-sam
REGION=us-west-2

.PHONY: deploy

bucket:
	aws s3 mb s3://$(BUCKET_NAME) --region $(REGION)

deploy:
	sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket $(BUCKET_NAME)
	sam deploy --template-file packaged.yaml --stack-name $(STACK_NAME) --capabilities CAPABILITY_IAM --region $(REGION)

destroy:
	aws cloudformation delete-stack --stack-name $(STACK_NAME) --region $(REGION)
	aws s3 rb s3://$(BUCKET_NAME) --force --region $(REGION)
