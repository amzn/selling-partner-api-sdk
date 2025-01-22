<?php
/**
 * InventoryDetailsVisibilityTest
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
use OpenAPI\Client\Model\awd\InventoryDetailsVisibility;

/**
 * InventoryDetailsVisibilityTest Class Doc Comment
 *
 * @category    Class
 * @description Enum to specify if returned summaries should include additional summarized inventory details and quantities.
 * @package     OpenAPI\Client
 */
class InventoryDetailsVisibilityTest extends TestCase
{

    private InventoryDetailsVisibility $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryDetailsVisibility();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryDetailsVisibility"
     */
    public function testInventoryDetailsVisibility()
    {
        $this->assertInstanceOf(InventoryDetailsVisibility::class, $this->model);
    }
}
