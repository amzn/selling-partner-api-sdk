<?php
/**
 * PrepCategoryTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinbound\PrepCategory;

/**
 * PrepCategoryTest Class Doc Comment
 *
 * @category    Class
 * @description The preparation category for shipping an item to Amazon&#39;s fulfillment network.
 * @package     OpenAPI\Client
 */
class PrepCategoryTest extends TestCase
{

    private PrepCategory $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepCategory();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepCategory"
     */
    public function testPrepCategory()
    {
        $this->assertInstanceOf(PrepCategory::class, $this->model);
    }
}
