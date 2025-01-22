<?php
/**
 * ShipmentSortableFieldTest
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
use OpenAPI\Client\Model\awd\ShipmentSortableField;

/**
 * ShipmentSortableFieldTest Class Doc Comment
 *
 * @category    Class
 * @description Denotes the field name on which the shipments are to be sorted.
 * @package     OpenAPI\Client
 */
class ShipmentSortableFieldTest extends TestCase
{

    private ShipmentSortableField $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentSortableField();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentSortableField"
     */
    public function testShipmentSortableField()
    {
        $this->assertInstanceOf(ShipmentSortableField::class, $this->model);
    }
}
