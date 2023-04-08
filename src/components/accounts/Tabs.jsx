const Tabs = ({tab}) => {
  return (
    <div className="border border-zinc-900 grid place-items-center py-4">
        {tab.icon}
        <p className="mt-2">{tab.title}</p>
    </div>
  )
}

export default Tabs