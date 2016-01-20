(ns pga2d.diagram
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

(defn mndist [mv0 mv1]
  "return the manhattan metric between two (non-ideal) point multivectors"
  (let [[x0 y0 z0] (gr/point-from mv0)
        [x1 y1 z0] (gr/point-from mv1)]
    (+ (Math.abs (- x0 x1)) (Math.abs (- y0 y1)))))

(defn selected [mv kw selection] (assoc mv :selected (= kw selection)))

(defn diagram [options]
  "Create a diagram.  Options is a map with some or all of the following keys:
     :g -- a geometric algebra; defaults to (cf/ga 0)
     :coords -- the canvas coordinate system; defaults to [[-1 -1] [1 1]]
     :dragables -- a map of objects that the user can drag; the keys should be
         identifying keywords, and each value should be a map with keys :mv (a
         point multivector), and :color.  Currently only point draggables are
         supported, so the multivectors given here must correspond to points.
     :draw -- a function that draws the drawing.  Will be called automatically
         whenever the drawing needs to be updated.  Receives the following
         arguments, in order: [g cv render draggable]
           g - the geometric algebra object
           cv - the canvas object
           render - a 2-arg function which renders multivectors in the canvas;
             1st arg is multivector, or array thereof, 2nd arg is color
           draggable - a 1-arg function that recives the id of a draggable multivector,
             and returns its current multivector value
         The draw function should NOT render the dragables -- the diagram will render
         the dragables separately."
  (let [defaults   {:g        (cf/ga 0)
                    :dragables {}
                    :draw     (fn [] nil)
                    :coords   [[-1 -1] [1 1]]}
        {:keys [g
                dragables
                draw
                coords]} (into defaults options)
         N         (g :normalized)
         cv        (c/canvas (first coords) (second coords))
         render    (c/canvas-render cv g)
         state     (atom {:dragables dragables})
         dragable   (fn [k] (get-in @state [:dragables k :mv]))
         selected  (fn [mv k] (assoc mv :selected (= k (@state :selection))))

         draw-all  (fn []
                     (draw g cv render dragable)
                     (doseq [[k {:keys [mv color]}]  (@state :dragables)]
                       (render (selected mv k) {:color color})))
        ]

    ((cv :install-mouse-handler)
     (fn [event]
       (condp = (event :type)
         :down
         nil

         :up
         nil

         :move
         (let [old-selection (@state :selection)
               x             (get-in event [:xy 0])
               y             (get-in event [:xy 1])
               selection     (first (first (filter
                                            (fn [[k v]] (< (mndist (N (v :mv)) (gr/point x y 1)) 0.05))
                                            (@state :dragables))))]
           (swap! state assoc :selection selection)
           (when (not= selection old-selection) 
             (draw-all)
             ))


         :drag
         (let [x  (get-in event [:xy 0])
               y  (get-in event [:xy 1])]

           (swap! state assoc-in [:dragables (@state :selection) :mv] (gr/point x y 1))
           (draw-all)
           )

         )
       ))

    (draw-all)

    )
  )

