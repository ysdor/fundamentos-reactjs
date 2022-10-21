import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi maxime rem esse suscipit magnam nostrum placeat debitis dolorum pariatur possimus laudantium natus, quos quidem culpa et obcaecati itaque officia?"
      />

      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}