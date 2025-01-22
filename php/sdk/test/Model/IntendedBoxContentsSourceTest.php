<?php
/**
 * IntendedBoxContentsSourceTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v0\IntendedBoxContentsSource;

/**
 * IntendedBoxContentsSourceTest Class Doc Comment
 *
 * @category    Class
 * @description How the seller intends to provide box contents information for a shipment. Leaving this field blank is equivalent to selecting &#x60;NONE&#x60;, which will incur a fee if the seller does not provide box contents information.
 * @package     OpenAPI\Client
 */
class IntendedBoxContentsSourceTest extends TestCase
{

    private IntendedBoxContentsSource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IntendedBoxContentsSource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IntendedBoxContentsSource"
     */
    public function testIntendedBoxContentsSource()
    {
        $this->assertInstanceOf(IntendedBoxContentsSource::class, $this->model);
    }
}
