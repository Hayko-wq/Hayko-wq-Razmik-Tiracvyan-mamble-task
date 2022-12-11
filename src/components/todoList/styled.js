import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";
import {
  FlexRow,
  Unset,
  FlexRowCenter,
  FlexColumn,
  FlexRowSpaceBetween,
} from "../../utils/flex";

export const FormWrapper = styled.form`
  width: 100%;
`;

export const InputBlock = styled.div`
  ${FlexRowCenter};
  padding-left: 40px;
  padding-right: 40px;
`;

export const PageTitle = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;
  color: ${COLORS.grey};
`;

export const HideWrapper = styled.div`
  ${FlexRow};
  gap: 10px;
`;

export const HideCompleted = styled.div`
  ${FlexRowSpaceBetween};
  padding-left: 10px;
  padding-right: 10px;
  background: yellow;
`;

export const ToDoInput = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  border: none;
  outline: none;
  border: 1px solid ${COLORS.yellow};
  padding-left: 8px;
`;

export const AddButton = styled.button`
  ${Unset}
  width: 100px;
  height: 52px;
  border-radius: 4px;
  cursor: pointer;
  background: ${COLORS.blue};
`;

export const HideChecked = styled.input``;

export const HideCheckedText = styled.span``;

export const CheckElements = styled.input``;

export const ToDoItemsWrapper = styled.div`
  ${FlexColumn};
  gap: 20px;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ToDoItemContent = styled.div`
  ${FlexRow};
  width: 100%;
  justify-content: space-between;

  &:hover {
    background: ${COLORS.light_grey};
  }
`;

export const ToDoItem = styled.div`
  width: 100%;
  color: ${({ checked }) => (checked ? COLORS.grey : COLORS.black)};
`;

export const ToDoText = styled.span`
  margin-left: 20px;
`;

export const RemoveButton = styled.button``;
