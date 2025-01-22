<?php
/**
 * AsinBadgeTest
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
use OpenAPI\Client\Model\aplusContent\AsinBadge;

/**
 * AsinBadgeTest Class Doc Comment
 *
 * @category    Class
 * @description A flag that provides additional information about an ASIN. This is contextual and may change depending on the request that generated it.
 * @package     OpenAPI\Client
 */
class AsinBadgeTest extends TestCase
{

    private AsinBadge $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AsinBadge();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AsinBadge"
     */
    public function testAsinBadge()
    {
        $this->assertInstanceOf(AsinBadge::class, $this->model);
    }
}
