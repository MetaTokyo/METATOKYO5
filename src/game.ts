import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const yukaxxx = new Entity('yukaxxx')
engine.addEntity(yukaxxx)
yukaxxx.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(8, 0.016389846801757812, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4916834235191345, 1, 0.3334440290927887)
})
yukaxxx.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("76b83cba-65dc-4615-9805-d4e154591961/yukaxxx2.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
yukaxxx.addComponentOrReplace(gltfShape)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape2 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const base = new Entity('base')
engine.addEntity(base)
base.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
base.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("326766a2-02ee-4232-9ed1-db4a30346ca6/base.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
base.addComponentOrReplace(gltfShape3)

const enn = new Entity('enn')
engine.addEntity(enn)
enn.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
enn.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("e7fbdde0-c4b9-41f1-9be1-14fd52e69a3e/en.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
enn.addComponentOrReplace(gltfShape4)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.951848983764648, 1.5, 4.415297508239746),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 1.5973243713378906)
})
imageFromURL.addComponentOrReplace(transform6)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(6.169907569885254, 2.143383502960205, 4.403172492980957),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform7)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(imageFromURL, {"image":"https://static.wixstatic.com/media/ebffef_4d98564f36634c5f88b1cdf6cccc1f99~mv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(externalLink, {"url":"https://www.glitchrave.com/"}, createChannel(channelId, externalLink, channelBus))