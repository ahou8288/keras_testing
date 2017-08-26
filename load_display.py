from keras.models import load_model
from keras.utils import plot_model
import pydot2
import graphviz
print('import complete')

model = load_model('neural1_model.h5')
print('model loaded')
plot_model(model, to_file='model.png')