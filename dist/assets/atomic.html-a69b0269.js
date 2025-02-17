const t=JSON.parse('{"key":"v-f854807c","path":"/thread/atomic.html","title":"Java atomic包中的原子操作类（AtomicInteger）总结","lang":"zh-CN","frontmatter":{"title":"Java atomic包中的原子操作类（AtomicInteger）总结","shortTitle":"原子操作类Atomic","description":"Java 中的 java.util.concurrent.atomic 包提供了一系列类，这些类支持原子操作（即线程安全而无需同步）在单个变量上，这大大减少了并发编程的复杂性。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,atomic,原子类,AtomicInteger,AtomicIntegerArray,LongAdder,AtomicReference"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/atomic.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java atomic包中的原子操作类（AtomicInteger）总结"}],["meta",{"property":"og:description","content":"Java 中的 java.util.concurrent.atomic 包提供了一系列类，这些类支持原子操作（即线程安全而无需同步）在单个变量上，这大大减少了并发编程的复杂性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java atomic包中的原子操作类（AtomicInteger）总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"原子操作的基本数据类型","slug":"原子操作的基本数据类型","link":"#原子操作的基本数据类型","children":[]},{"level":2,"title":"原子操作的数组类型","slug":"原子操作的数组类型","link":"#原子操作的数组类型","children":[]},{"level":2,"title":"原子操作的引用类型","slug":"原子操作的引用类型","link":"#原子操作的引用类型","children":[]},{"level":2,"title":"原子更新字段类型","slug":"原子更新字段类型","link":"#原子更新字段类型","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":15},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":8.45,"words":2534},"filePathRelative":"thread/atomic.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第二十七节：原子操作类 Atomic</h1>\\n<p>我们前面讲过 <a href=\\"https://javabetter.cn/thread/cas.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CAS</a>，相信大家都还有印象，Java 中的原子操作类，如 AtomicInteger 和 AtomicLong，底层就是利用 CAS 来确保变量更新的原子性的。</p>\\n<p>像递增运算 count++ 就不是一个原子操作，在多线程环境下并不能得到正确的结果，因为 count++ 操作实际上分为三个步骤：</p>\\n<ol>\\n<li>读取 count 变量的值；</li>\\n<li>将 count 变量的值加 1；</li>\\n<li>将 count 变量的值写入到内存中；</li>\\n</ol>"}');export{t as data};
