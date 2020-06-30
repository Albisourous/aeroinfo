versions:
	which		$(PYTHON)
	$(PYTHON)	--version

models.html: main.py
	$(PYDOC) -w main.py > models.html

data.log:
	git log > data.log
