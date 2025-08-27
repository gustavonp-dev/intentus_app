import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IconProps {
    Icon: FC<{ size?: number, color?: string }>;
    size?: number;
    color?: string;
}

type Props = IconProps & TouchableOpacityProps

export default function IconButton({ Icon, size, color, ...props } : Props) {
    return (
        <TouchableOpacity>
            <Icon size={size} color={color}/>
        </TouchableOpacity>
    )
}