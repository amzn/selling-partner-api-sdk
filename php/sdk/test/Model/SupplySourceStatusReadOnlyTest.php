<?php
/**
 * SupplySourceStatusReadOnlyTest
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
use SpApi\Model\supplySources\v2020_07_01\SupplySourceStatusReadOnly;

/**
 * SupplySourceStatusReadOnlyTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;SupplySource&#x60; status.
 * @package     SpApi
 */
class SupplySourceStatusReadOnlyTest extends TestCase
{

    private SupplySourceStatusReadOnly $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySourceStatusReadOnly();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySourceStatusReadOnly"
     */
    public function testSupplySourceStatusReadOnly()
    {
        $this->assertInstanceOf(SupplySourceStatusReadOnly::class, $this->model);
    }
}
