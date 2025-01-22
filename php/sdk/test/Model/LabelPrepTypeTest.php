<?php
/**
 * LabelPrepTypeTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepType;

/**
 * LabelPrepTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of label preparation that is required for the inbound shipment.
 * @package     OpenAPI\Client
 */
class LabelPrepTypeTest extends TestCase
{

    private LabelPrepType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelPrepType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelPrepType"
     */
    public function testLabelPrepType()
    {
        $this->assertInstanceOf(LabelPrepType::class, $this->model);
    }
}
