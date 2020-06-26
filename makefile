versions:
	which		$(PYTHON)
	$(PYTHON)	--version

models.html: models.py
	$(PYDOC) -w models.p > models.html

IDB1.log:
	git log > IDB1.log