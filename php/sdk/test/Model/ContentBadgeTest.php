<?php
/**
 * ContentBadgeTest
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
use SpApi\Model\aplusContent\v2020_11_01\ContentBadge;

/**
 * ContentBadgeTest Class Doc Comment
 *
 * @category    Class
 * @description A flag that provides additional information about an A+ Content document.
 * @package     SpApi
 */
class ContentBadgeTest extends TestCase
{

    private ContentBadge $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentBadge();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentBadge"
     */
    public function testContentBadge()
    {
        $this->assertInstanceOf(ContentBadge::class, $this->model);
    }
}
