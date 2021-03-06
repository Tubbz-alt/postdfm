import { ASTNode } from "./astNode";
import { ASTRaws } from "./astRaws";
import { ASTType } from "./astType";
import { ObjectKind } from "./objectKind";
import { Property } from "./property";

interface ObjectRaws extends ASTRaws {
  beforeName?: string;
  afterName?: string;
  beforeType?: string;
  afterType?: string;
  beforeOrder?: string;
  afterOrder?: string;
  beforeProperties?: string;
  beforeChildren?: string;
  beforeEnd?: string;
}

export class DObject extends ASTNode<ObjectRaws> {
  public kind: ObjectKind;
  public name: string;
  public type: string;
  public order: number;
  public properties: Property[];
  public children: DObject[];

  constructor(
    kind: ObjectKind,
    name: string,
    type: string,
    order?: number,
    properties?: Property[],
    children?: DObject[]
  ) {
    super(ASTType.Object);
    this.kind = kind;
    this.name = name;
    this.type = type;

    if (order != null) {
      this.order = order;
    }

    this.properties = properties || [];
    this.children = children || [];
  }
}
