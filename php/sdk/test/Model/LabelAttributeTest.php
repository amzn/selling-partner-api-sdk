<?php
/**
 * LabelAttributeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\shipping\v2\LabelAttribute;

/**
 * LabelAttributeTest Class Doc Comment
 *
 * @category    Class
 * @description Enumerates the attributes supported to be printed on a shipping label. The values for these attributes are retrieved from GetRates/OneClickShipment request
 * @package     SpApi
 */
class LabelAttributeTest extends TestCase
{

    private LabelAttribute $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelAttribute();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelAttribute"
     */
    public function testLabelAttribute()
    {
        $this->assertInstanceOf(LabelAttribute::class, $this->model);
    }
}
