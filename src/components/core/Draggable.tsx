import { useDraggable } from "@dnd-kit/core"

interface DraggableProps extends React.HTMLAttributes<HTMLButtonElement>{
    id: string
}

export function Draggable({ id, className, children }: DraggableProps) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <button className={className} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </button>
    )
}