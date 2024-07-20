import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DraggableDirective } from "./darg.directive";
import { MovableDirective } from "./movable.directive";
import { MovableAreaDirective } from "./movable-area.directive";
import { DraggableHelperDirective } from "./drag-help.directive";
import { OverlayModule } from "@angular/cdk/overlay";
import { SortableListDirective } from "./sort-list.directive";
import { SortableDirective } from "./sort.directive";
import { DropzoneDirective } from "./dropzone.directive";
import { DroppableDirective } from "./drop.directive";
import { DroppableService } from './drop.service';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [
    DraggableDirective,
    MovableDirective,
    MovableAreaDirective,
    DraggableHelperDirective,
    SortableListDirective,
    SortableDirective,
    DropzoneDirective,
    DroppableDirective
  ],
  exports: [
    DraggableDirective,
    MovableDirective,
    MovableAreaDirective,
    DraggableHelperDirective,
    SortableListDirective,
    SortableDirective,
    DropzoneDirective,
    DroppableDirective
  ],
  providers: [
    DroppableService
  ]
})
export class DraggableModule {}