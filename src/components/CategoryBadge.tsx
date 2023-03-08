import { Badge } from '@chakra-ui/react';

interface ICategoryBadgeProps {
  category: string;
}

function CategoryBadge({ category }: ICategoryBadgeProps) {
  // Set color to variable based on category
  const color = () => {
    switch (category) {
      case 'Cardio':
        return 'green';
      case 'Strength':
        return 'red';
      case 'Plyometrics':
        return 'blue';
      case 'Stretching':
        return 'yellow';
      case 'Powerlifting':
        return 'orange';
      case 'Olympic Weightlifting':
        return 'teal';
      case 'Strongman':
        return 'purple';
      default:
        return 'gray';
    }
  };

  return <Badge colorScheme={color()}> {category}</Badge>;
}

export default CategoryBadge;
