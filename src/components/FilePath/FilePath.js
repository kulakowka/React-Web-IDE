import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const FilePath = ({ path }) => {
  const sections = []
  path.split('/').forEach(section => {
    sections.push(<Breadcrumb.Divider key={`divided-${section}`} />)
    sections.push(<Breadcrumb.Section key={`section-${section}`}>{section}</Breadcrumb.Section>)
  })
  return <Breadcrumb>{sections}</Breadcrumb>
}

export default FilePath
