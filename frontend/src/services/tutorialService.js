import axios from "axios";

export const sender = async (url, id, forms) => {
  const tutorialId = parseInt(id, 10);
  try {
    const formData = new FormData();
    formData.append("question", forms.question);
    formData.append("firstProposal", forms.optionOne);
    formData.append("secondProposal", forms.optionTwo);
    formData.append("response", forms.answer);
    formData.append("name", forms.nameTutorial);
    formData.append("formationId", forms.idFormation);

    if (forms.updatedTags.length > 0) {
      formData.append("valuesTag", forms.updatedTags);
    } else {
      formData.append("valuesTag", forms.valuesTag);
    }

    formData.append("level", forms.levelTutorial);
    formData.append("objectif", forms.objectifTutorial);
    formData.append("explication", forms.explicationTutorial);
    formData.append("urlVideo", forms.videoUrl);
    formData.append("quizzId", forms.quizzId);
    formData.append("tutorialId", forms.tutorialId);
    formData.append("tagId", forms.tagId);

    if (forms.selectedFile) {
      formData.append("file", forms.selectedFile);
    }

    if (forms.selectedFileUrl.length > 0) {
      formData.append("newFilename", forms.selectedFileUrl);
    }

    if (tutorialId !== 0 && forms.updatedTags && forms.updatedTags.length > 0) {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_API}/${url}/${tutorialId}`,
        formData
      );
      return response.data;
    }
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const fetcherTags = async (url, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const fetcherTutorialById = async (url, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const deleteTutorial = async (url, id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};
