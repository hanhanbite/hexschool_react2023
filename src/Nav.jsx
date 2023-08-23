// w1-3 練習hook 物件
function Navigation() {
  const nav_items = [
    {
      id: 1,
      name: '第一週',
      url: 'index.html'
    },
    {
      id: 2,
      name: '第二週',
      url: 'main2.html'
    }
  ]
  return(<nav>
    <ul>
      {nav_items.map(nav_item => {
        return(
          <li key={nav_item.id}>
            <a href={nav_item.url}>{nav_item.name}</a>
          </li>
        )
      })}
    </ul>
  </nav>)
}
export default Navigation;

