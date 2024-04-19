# Chest X-Ray Classification Using Gemini 1.5 Pro

This is a simple image classification project that uses google gemini 1.5 pro to predict whether an image is a normal chest x-ray or a chest x-ray with cancer. The model we are using is Gemini 1.5 Pro.

**Main purpose of this project is to showcase how to use Gemini 1.5 Pro to perform image classification.** This should be used for educational purposes only and not for any medical decision making.

## Usage

1. Clone the repo.
2. Rename .env_local to .env
3. In .env file enter your own API_KEY which you can get from [Google AI Studio](https://aistudio.google.com/app/apikey)

4. Run `npm install` to install the dependencies.
5. Run `npm run start` to run the script.

## First Run :

```
## Comparison of Chest X-rays

Both images are chest X-rays, but they show different conditions:

**Image 1:**

* This X-ray appears largely normal.
* The lungs are clear, with no obvious masses or infiltrates.
* The heart size appears normal.
* The ribs and spine are intact.
* The diaphragm is well-defined.

**Image 2:**

* This X-ray shows significant abnormalities.
* There are multiple patchy infiltrates throughout both lungs, suggestive of an infection such as pneumonia or tuberculosis.
* The heart may appear enlarged, but this could be due to the angle of the X-ray.
* There are also some calcifications in the hilar region, which could be due to old granulomatous disease.

**In summary:**

The first image represents a healthy chest X-ray, while the second image shows signs of lung disease, likely an infection.

**Disclaimer:**

Please remember, I am an AI chatbot and cannot provide medical diagnosis. The information provided here is for general knowledge and educational purposes only, and does not constitute medical advice. It is essential to consult with a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.
```

## Second Run :

```
## Comparing Chest X-Rays: A Detailed Look

Both images showcase chest X-rays, offering a view of the lungs, heart, and rib cage. However, there are distinct differences between the two:

**Image 1:**

* **Overall Appearance:** The lungs appear clear with well-defined bronchial markings.
* **Heart and Mediastinum:**  The heart size seems normal, and the mediastinum (area between the lungs) appears clear.
* **Bones:** The rib cage and clavicles are intact without any visible fractures or abnormalities.
* **Diaphragm:**  Both diaphragmatic domes are well-defined and appear normal in contour.

**Image 2:**

* **Overall Appearance:**  The lungs exhibit widespread, irregular opacities throughout both lung fields. These opacities suggest the presence of an underlying disease process.
* **Heart and Mediastinum:** The heart size may be slightly enlarged, and the mediastinum could be widened, although this can be difficult to assess definitively on a single X-ray.
* **Bones:** Similar to the first image, the rib cage and clavicles appear normal.
* **Diaphragm:** The diaphragm appears normal.

## Possible Interpretations:

* **Image 1:** This chest X-ray is likely considered normal or shows no significant abnormalities.
* **Image 2:** This chest X-ray suggests a pathological process. The diffuse opacities could represent a number of conditions, including:
    * **Pneumonia:** An infection causing inflammation in the lungs.
    * **Pulmonary edema:** Fluid accumulation in the lungs due to heart failure or other causes.
    * **Interstitial lung disease:** A group of disorders causing scarring of lung tissue.
    * **Lung cancer:** Malignant tumors within the lungs.

```

You would note that we are just asking the model to compare the images and not giving any hints in the prompt on what the images might be about. Still the performance is good infact it is more than capable of understanding the context of the images.

```
const result = await model.generateContent([
    `Compare the following two images and provide a detailed comparison.`,
    [base64Image1, base64Image2],
  ]);
```
