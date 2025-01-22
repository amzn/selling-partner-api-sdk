<?php
/**
 * SkuQuantitiesVisibilityTest
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
use OpenAPI\Client\Model\awd\SkuQuantitiesVisibility;

/**
 * SkuQuantitiesVisibilityTest Class Doc Comment
 *
 * @category    Class
 * @description Enum to specify if returned shipment should include SKU quantity details
 * @package     OpenAPI\Client
 */
class SkuQuantitiesVisibilityTest extends TestCase
{

    private SkuQuantitiesVisibility $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SkuQuantitiesVisibility();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SkuQuantitiesVisibility"
     */
    public function testSkuQuantitiesVisibility()
    {
        $this->assertInstanceOf(SkuQuantitiesVisibility::class, $this->model);
    }
}
