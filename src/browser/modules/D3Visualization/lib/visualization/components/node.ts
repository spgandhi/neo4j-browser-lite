/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default class Node {
  id: any
  labels: any
  propertyList: any
  propertyMap: any
  isNode = true
  isRelationship = false

  constructor(
    id: any,
    labels: any,
    properties: any,
    propertyTypes: Record<string, string>
  ) {
    this.id = id
    this.labels = labels
    this.propertyMap = properties
    this.propertyList = (() => {
      const result = []
      for (const key of Object.keys(properties || {})) {
        const value = properties[key]
        const type = propertyTypes[key]
        result.push({ key, value, type })
      }
      return result
    })()
  }

  toJSON() {
    return this.propertyMap
  }

  relationshipCount(graph: any) {
    const node = this
    const rels = []
    for (const relationship of Array.from(graph.relationships())) {
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      if (relationship.source === node || relationship.target === node) {
        rels.push(relationship)
      }
    }
    return rels.length
  }
}
