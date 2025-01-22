<?php
/**
 * BoxContentsSourceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsSource;

/**
 * BoxContentsSourceTest Class Doc Comment
 *
 * @category    Class
 * @description Where the seller provided box contents information for a shipment.
 * @package     OpenAPI\Client
 */
class BoxContentsSourceTest extends TestCase
{

    private BoxContentsSource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BoxContentsSource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BoxContentsSource"
     */
    public function testBoxContentsSource()
    {
        $this->assertInstanceOf(BoxContentsSource::class, $this->model);
    }
}
