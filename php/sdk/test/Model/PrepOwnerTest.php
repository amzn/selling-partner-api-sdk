<?php
/**
 * PrepOwnerTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PrepOwner;

/**
 * PrepOwnerTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates who will prepare the item.
 * @package     OpenAPI\Client
 */
class PrepOwnerTest extends TestCase
{

    private PrepOwner $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepOwner();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepOwner"
     */
    public function testPrepOwner()
    {
        $this->assertInstanceOf(PrepOwner::class, $this->model);
    }
}
