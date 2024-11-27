import { useDroppable } from "@dnd-kit/core"

interface DroppableProps extends React.HTMLAttributes<HTMLDivElement>{
    id: string
};

export function Droppable({ id, className, children }: DroppableProps) {
    const {isOver, setNodeRef} = useDroppable({
        id: id
    });

    return (
        <div ref={setNodeRef} className={className}>
            {children}
        </div>
    )
}