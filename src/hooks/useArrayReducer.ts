import { useReducer } from "react";

enum ARRAY_REDUCER_ACTIONS {
  ADD,
  REMOVE,
  MOVE,
}

type IArrayReducerState<T> = T[];
type IArrayReducerAction<T> = {
  type: ARRAY_REDUCER_ACTIONS;
  index: {
    from?: number;
    to?: number;
  };
  element?: T;
};

const addAtIndex = <T>(element: T, idx: number, arr: T[]): T[] => [
  ...arr.slice(0, idx),
  element,
  ...arr.slice(idx),
];

const removeAtIndex = <T>(idx: number, arr: T[]): T[] =>
  arr.filter((_, i) => i !== idx);

function reducer<T>(
  state: IArrayReducerState<T>,
  action: IArrayReducerAction<T>
): IArrayReducerState<T> {
  let idx: number;
  switch (action.type) {
    case ARRAY_REDUCER_ACTIONS.ADD:
      if (!action.element)
        throw new Error("Must include an element to be added");
      idx = action.index.to ?? 0;
      return addAtIndex(action.element, idx, state);
    case ARRAY_REDUCER_ACTIONS.REMOVE:
      idx = action.index.from ?? -1;
      return removeAtIndex(idx, state);
    case ARRAY_REDUCER_ACTIONS.MOVE:
      const fromIdx = action.index.from ?? -1;
      const toIdx = action.index.to ?? 0;
      const element = state[fromIdx];
      if (!element)
        throw new Error(
          `Invalid "from" index. (from: ${fromIdx}, to: ${toIdx})`
        );
      return addAtIndex(element, toIdx, removeAtIndex(fromIdx, state));
    default:
      throw new Error(`Invalid action type "${action.type}" passed.`);
  }
}

/**
 * General hook for maintaining an array of same-type elements.
 *
 * For "integration test" see stories on `ListedArray` component.
 *
 * @param initialState
 */
export default function useArrayReducer<T>(
  initialState: IArrayReducerState<T>
) {
  const [state, dispatch] = useReducer<
    (
      state: IArrayReducerState<T>,
      action: IArrayReducerAction<T>
    ) => IArrayReducerState<T>
  >(reducer, initialState);

  /**
   * Add new element at index.
   * @param element
   * @param to (optional) Adds to top if not specified
   */
  const onAdd = (element: T, to?: number) =>
    dispatch({
      type: ARRAY_REDUCER_ACTIONS.ADD,
      index: { to, from: -1 },
      element,
    });

  /**
   * Remove element at index `from`
   * @param from
   */
  const onRemove = (from: number) =>
    dispatch({
      type: ARRAY_REDUCER_ACTIONS.REMOVE,
      index: { to: -1, from },
    });

  /**
   * Moves an element "from" an index "to" a new index.
   *
   * Think of this as a shortcut for calling `onRemove` _then_ `onAdd`.
   *
   * The "from" index should reflect the index of the item in the pre-mutation state.
   * The "to" index should reflect the index insertion point on the result of the item removal. Note that the correct element here may depend on the previous position of the element...
   *
   * ENHANCEMENT Add logic for handling "to" updates.
   *
   * @param from
   * @param to
   */
  const onMove = (from: number, to: number) =>
    dispatch({ type: ARRAY_REDUCER_ACTIONS.MOVE, index: { from, to } });

  /**
   * Move the element up one index
   * Shortcut for `onMove(idx, idx-1)`
   * @param idx
   */
  const onMoveUp = (idx: number) => onMove(idx, idx - 1);

  /**
   * Move the element down one index
   * Shortcut for `onMove(idx, idx+1)`
   * @param idx
   */
  const onMoveDown = (idx: number) => onMove(idx, idx + 1);

  return { state, onAdd, onRemove, onMove, onMoveUp, onMoveDown };
}
