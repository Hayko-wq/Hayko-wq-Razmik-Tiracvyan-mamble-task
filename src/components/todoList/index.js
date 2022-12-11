import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { LocalStorageSetItem } from "../../utils/helpers";
import {
  FormWrapper,
  InputBlock,
  PageTitle,
  HideWrapper,
  HideCompleted,
  HideCheckedText,
  ToDoInput,
  AddButton,
  HideChecked,
  CheckElements,
  ToDoItemsWrapper,
  ToDoItem,
  ToDoText,
  RemoveButton,
  ToDoItemContent,
} from "./styled";

const getLocalstorage = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("data")));
  } else {
    return [];
  }
};

export const ToDoList = ({ completed, setCompleted }) => {
  const [hide, setHide] = useState(true);
  const [ToDo, setToDo] = useState(getLocalstorage());
  const [hideElements, setHideElements] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ task }) => {
    reset();
    setToDo((e) => {
      return [...e, task];
    });
  };

  const onRemove = (index) => {
    setToDo((prevState) => {
      const remItem = prevState.slice();
      remItem.splice(index, 1);
      return remItem;
    });
  };

  const markCompleted = (event) => {
    var updatedList = [...completed];

    if (event.target.checked) {
      updatedList = [...completed, event.target.value];
    } else {
      updatedList.splice(completed.indexOf(event.target.value), 1);
    }
    setCompleted(updatedList);
  };

  const onHide = () => {
    setHide((prev) => !prev);
    var hideArray = [...ToDo];

    setHideElements(
      hideArray.filter(function (val) {
        return completed.indexOf(val) == -1;
      })
    );
  };

  useEffect(() => {
    LocalStorageSetItem("data", ToDo);
  }, [ToDo]);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <HideCompleted>
        <PageTitle>Task</PageTitle>
        <HideWrapper>
          <HideChecked type="checkbox" onClick={onHide} />
          <HideCheckedText>Hide checked</HideCheckedText>
        </HideWrapper>
      </HideCompleted>

      <InputBlock>
        <ToDoInput
          placeholder="Write here"
          {...register("task", { maxLength: 54 })}
        />
        <AddButton>Add</AddButton>
      </InputBlock>
      {errors.task && <p>Task content can contain max 54 characters.</p>}
      <ToDoItemsWrapper>
        {hide
          ? ToDo.length === 0
            ? null
            : ToDo.map((element, index) => {
                return (
                  <ToDoItemContent key={uuidv4()}>
                    <ToDoItem checked={completed.includes(element)}>
                      <CheckElements
                        value={element}
                        type="checkbox"
                        checked={completed.includes(element)}
                        onChange={markCompleted}
                      />
                      <ToDoText>{element}</ToDoText>
                    </ToDoItem>

                    <RemoveButton onClick={() => onRemove(index)}>x</RemoveButton>
                  </ToDoItemContent>
                );
              })
          : hideElements.map((element, index) => {
              return (
                <ToDoItemContent key={uuidv4()}>
                  <ToDoItem>
                    <CheckElements
                      value={element}
                      type="checkbox"
                      onChange={markCompleted}
                    />
                    <ToDoText>{element}</ToDoText>
                  </ToDoItem>
                </ToDoItemContent>
              );
            })}
      </ToDoItemsWrapper>
    </FormWrapper>
  );
};
