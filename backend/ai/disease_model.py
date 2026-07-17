import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier


# Load Dataset
df = pd.read_csv("datasets/disease_dataset.csv")

# Features
X = df.drop("disease", axis=1)

# Target
y = df["disease"]

# Split Dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

# Train Model
model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
)

model.fit(X_train, y_train)

# Accuracy
accuracy = model.score(X_test, y_test)

print(f"Accuracy : {accuracy:.2f}")

# Save Model
joblib.dump(model, "ai/disease_model.pkl")

print("Model Saved Successfully")