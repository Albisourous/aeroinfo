versions:
	which		$(PYTHON)
	$(PYTHON)	--version

models.html: ./back-end/main.py
	$(PYDOC) -w main.py > models.html

data.log:
	git log > IDB3.log
